const config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   darkMode: ['class'],
   plugins: [require('tailwindcss-animate')],
   theme: {
      container: {
         center: true,
         padding: '2rem',
         theme: {
            screens: {
              '2xl': {'max': '1535px'},
              // => @media (max-width: 1535px) { ... }
        
              'xl': {'max': '1279px'},
              // => @media (max-width: 1279px) { ... }
        
              'lg': {'max': '1023px'},
              // => @media (max-width: 1023px) { ... }
        
              'md': {'max': '767px'},
              // => @media (max-width: 767px) { ... }
        
              'sm': {'max': '639px'},
              // => @media (max-width: 639px) { ... }
            }
          },        
      },
      extend: {
         fontFamily: {
            poppins: ['Averta', 'NexaRegular'],
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         colors: {
            green: '#01AA1B',
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            background: 'hsl(var(--background))',
            border: 'hsl(var(--border))',
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            foreground: 'hsl(var(--foreground))',
            input: 'hsl(var(--input))',
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
            },
            ring: 'hsl(var(--ring))',
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
         },
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: 0 },
            },
         },
      },
   },
};

export default config;
