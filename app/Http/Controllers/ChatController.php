<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'message' => ['required', 'string', 'max:2000'],
            'history' => ['sometimes', 'array'],
        ]);

        $fallback = $this->fallbackResponse($validated['message']);
        $apiKey = config('services.openai.key');

        if (! $apiKey) {
            return response()->json([
                'reply' => $fallback,
                'source' => 'fallback',
            ]);
        }

        try {
            $messages = collect($request->input('history', []))
                ->map(fn ($message) => [
                    'role' => $message['role'] ?? 'user',
                    'content' => $message['content'] ?? '',
                ])
                ->filter(fn ($message) => filled($message['content']))
                ->values()
                ->all();

            $messages[] = [
                'role' => 'user',
                'content' => $validated['message'],
            ];

            $response = Http::withToken($apiKey)
                ->acceptJson()
                ->timeout(20)
                ->post('https://api.openai.com/v1/chat/completions', [
                    'model' => config('services.openai.model', 'gpt-4o-mini'),
                    'messages' => array_merge(
                        [[
                            'role' => 'system',
                            'content' => 'You are a concise portfolio assistant for a developer website. Answer in a friendly, direct way using only portfolio-relevant details.',
                        ]],
                        $messages,
                    ),
                    'temperature' => 0.4,
                ]);

            if ($response->successful()) {
                $reply = data_get($response->json(), 'choices.0.message.content', $fallback);

                return response()->json([
                    'reply' => trim($reply),
                    'source' => 'openai',
                ]);
            }
        } catch (\Throwable $throwable) {
            // Fall through to the deterministic reply below.
        }

        return response()->json([
            'reply' => $fallback,
            'source' => 'fallback',
        ]);
    }

    private function fallbackResponse(string $message): string
    {
        $normalized = strtolower($message);

        if (str_contains($normalized, 'contact')) {
            return 'You can use the contact form or email hello@example.com directly. I usually respond within 24 hours.';
        }

        if (str_contains($normalized, 'project') || str_contains($normalized, 'featured')) {
            return 'The featured project is PulseBoard, a premium SaaS dashboard focused on customer health, revenue signals, and onboarding workflows.';
        }

        if (str_contains($normalized, 'stack') || str_contains($normalized, 'tech')) {
            return 'The core stack is Laravel 11, Inertia.js, React, Tailwind CSS v3, Framer Motion, and Lucide React.';
        }

        return 'I can help with the stack, projects, experience, certifications, or contact details. Ask me something specific and I will point you to the right section.';
    }
}