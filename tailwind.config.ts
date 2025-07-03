
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'exo': ['Exo 2', 'sans-serif'],
				'creepster': ['Creepster', 'cursive'],
				'nosifer': ['Nosifer', 'cursive'],
			},
			colors: {
				// Rick and Morty theme colors - Enhanced
				'rick-green': {
					300: '#4ade80',
					400: '#22d3ee',
					500: '#00ff88',
					600: '#00cc6a',
					700: '#00994d',
					800: '#00663d'
				},
				'portal-blue': {
					300: '#7dd3fc',
					400: '#60a5fa',
					500: '#00d4ff',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af'
				},
				'morty-yellow': {
					300: '#fde047',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309'
				},
				'space-purple': {
					400: '#a855f7',
					500: '#9333ea',
					600: '#7c3aed',
					700: '#6b21a8',
					800: '#581c87',
					900: '#4c1d95'
				},
				'rick-cyan': {
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490'
				},
				'multiverse-dark': {
					900: '#0a0a0a',
					800: '#1a1a2e',
					700: '#16213e',
					600: '#0f3460'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'multiverse-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f0f 100%)',
				'portal-gradient': 'radial-gradient(circle, #00ff88 0%, #00d4ff 50%, #9333ea 100%)',
				'rick-gradient': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #9333ea 100%)',
				'multiverse-animated': 'linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e, #0f3460)',
			},
			animation: {
				'portal-spin': 'portal-spin 8s linear infinite',
				'portal-pulse': 'portal-pulse 3s ease-in-out infinite',
				'floating-particles': 'floating-particles 6s ease-in-out infinite',
				'rick-glow': 'rick-glow 2s ease-in-out infinite alternate',
				'multiverse-bg': 'multiverse-bg 20s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				'portal-spin': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(180deg) scale(1.1)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				},
				'portal-pulse': {
					'0%, 100%': { 
						opacity: '0.3',
						boxShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 30px #00ff88, 0 0 60px #00ff88, 0 0 90px #00ff88'
					}
				},
				'floating-particles': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'25%': { transform: 'translateY(-10px) translateX(5px)' },
					'50%': { transform: 'translateY(-5px) translateX(-5px)' },
					'75%': { transform: 'translateY(-15px) translateX(10px)' }
				},
				'rick-glow': {
					'0%, 100%': {
						textShadow: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88'
					},
					'50%': {
						textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88, 0 0 40px #00d4ff'
					}
				},
				'multiverse-bg': {
					'0%': { backgroundPosition: '0% 0%' },
					'25%': { backgroundPosition: '100% 0%' },
					'50%': { backgroundPosition: '100% 100%' },
					'75%': { backgroundPosition: '0% 100%' },
					'100%': { backgroundPosition: '0% 0%' }
				},
				glow: {
					'0%': {
						'box-shadow': '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88',
					},
					'100%': {
						'box-shadow': '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						'box-shadow': '0 0 0 0 rgba(0, 255, 136, 0.7)'
					},
					'70%': {
						opacity: '0.9',
						'box-shadow': '0 0 0 10px rgba(0, 255, 136, 0)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
