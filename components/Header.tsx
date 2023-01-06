import ToggleColorMode from './ToggleColorMode'

export default function Header() {
  return (
    <header className="flex justify-end p-6 bg-black dark:bg-slate-100 text-slate-100 dark:text-slate-900 shadow font-playfair rounded-md">
      <div>
        <ToggleColorMode />
      </div>
    </header>
  )
}
