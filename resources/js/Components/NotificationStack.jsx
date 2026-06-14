import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function NotificationStack({ notifications }) {
    return (
        <div className="pointer-events-none fixed bottom-6 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 space-y-3 md:left-auto md:right-6 md:w-full md:translate-x-0">
            <AnimatePresence>
                {notifications.map((notification) => (
                    <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className={`pointer-events-auto rounded-2xl border p-4 shadow-2xl backdrop-blur-xl ${notification.type === 'success' ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-100' : 'border-rose-400/30 bg-rose-500/10 text-rose-100'}`}
                    >
                        <div className="flex items-start gap-3">
                            {notification.type === 'success' ? (
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                            ) : (
                                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                            )}
                            <div>
                                <p className="font-medium">{notification.title}</p>
                                <p className="mt-1 text-sm text-current/80">{notification.message}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}