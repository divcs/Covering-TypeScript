'use client'

import React, { useState } from 'react'

// type Theme = 'light' | 'dark' | 'system'
// const [selectedTheme, setSelectedThem] = useState<Theme>('light') //if you want to specify the type, do this way

function Themes() {
  const [selectedTheme, setSelectedTheme] = useState('light') //useState is a generic function, no special need to specify here though
  const themeOptions = ['light', 'dark', 'system']

  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-5 font-semibold'>Themes</h1>

      <ThemeOptions
        themeOptions={themeOptions}
        selectedTheme={selectedTheme}
        onThemeClick={(theme) => setSelectedTheme(theme)}
      />
      <p className='mt-10'>
        Selected Theme: <strong>{selectedTheme}</strong>
      </p>
    </section>
  )
}
type ThemeOptionsProps<T> = {
  themeOptions: T[]
  selectedTheme: T
  onThemeClick: (theme: T) => void
}

function ThemeOptions<T extends React.ReactNode>({
  themeOptions,
  selectedTheme,
  onThemeClick,
}: ThemeOptionsProps<T>) {
  // {
  //  themeOptions: T[]; selectedTheme: T
  //  //there's rs bw themeOptions and selectedTheme both would be of the same type whether string or number
  // })
  return (
    <ul className='list-disc'>
      {themeOptions.map((theme, index) => (
        <li key={index}>
          <button
            onClick={() => onThemeClick(theme)}
            className={theme === selectedTheme ? 'font-bold' : ''}
          >
            {theme}
          </button>
        </li>
      ))}
    </ul>
  )
}
export default Themes
