<div style="font-family: Inter, Arial, sans-serif; background: #0f172a; color: #e2e8f0; padding: 24px; border-radius: 16px;">
    <h1 style="font-size: 20px; margin: 0 0 16px; color: #c7d2fe;">New portfolio inquiry</h1>
    <p style="margin: 0 0 8px;"><strong>Name:</strong> {{ $message['name'] }}</p>
    <p style="margin: 0 0 8px;"><strong>Email:</strong> {{ $message['email'] }}</p>
    <p style="margin: 0 0 8px;"><strong>Subject:</strong> {{ $message['subject'] }}</p>
    <div style="margin-top: 16px; padding: 16px; background: rgba(255,255,255,0.04); border-radius: 12px; white-space: pre-wrap; line-height: 1.7;">{{ $message['message'] }}</div>
</div>