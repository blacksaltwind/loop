import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Theme Test</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Use the dropdown to test light, dark, and system mode.
            </p>
          </div>

          <ModeToggle />
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold">Card</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              This card should change when the theme changes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}