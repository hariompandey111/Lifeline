import type { Config } from 'tailwindcss'

// ============================================
// 🎨 THEME PRESETS - Change 'activeTheme' to switch!
// ============================================

const themes = {
  // ──────────────────────────────────────────
  // THEME 1: "Corporate Trust" (Current)
  // Deep Blue + Gold - Professional, Premium
  // ──────────────────────────────────────────
  corporateTrust: {
    primary: {
      DEFAULT: '#1B4965',
      50: '#E8F1F5', 100: '#D1E3EB', 200: '#A3C7D7', 300: '#75ABC3',
      400: '#478FAF', 500: '#1B4965', 600: '#163D54', 700: '#113143',
      800: '#0C2532', 900: '#071921', 950: '#040D11',
    },
    secondary: {
      DEFAULT: '#D4A574',
      50: '#FCF8F4', 100: '#F9F1E9', 200: '#F0DCC8', 300: '#E7C7A7',
      400: '#DEB286', 500: '#D4A574', 600: '#C48D55', 700: '#A6713C',
      800: '#7D552D', 900: '#54391E', 950: '#2A1D0F',
    },
    accent: {
      DEFAULT: '#62B6CB',
      50: '#F0F9FB', 100: '#E1F3F7', 200: '#C3E7EF', 300: '#A5DBE7',
      400: '#87CFDF', 500: '#62B6CB', 600: '#4A9DB2', 700: '#3A7D8E',
      800: '#2B5D6A', 900: '#1B3D46', 950: '#0E1F23',
    },
  },

  // ──────────────────────────────────────────
  // THEME 2: "Elegant Emerald"
  // Forest Green + Champagne - Luxury, Nature, Care
  // ──────────────────────────────────────────
  elegantEmerald: {
    primary: {
      DEFAULT: '#1D4E4F',
      50: '#E8F3F3', 100: '#D1E7E7', 200: '#A3CFCF', 300: '#75B7B7',
      400: '#479F9F', 500: '#1D4E4F', 600: '#184142', 700: '#133435',
      800: '#0E2728', 900: '#091A1B', 950: '#050D0E',
    },
    secondary: {
      DEFAULT: '#C9A86C',
      50: '#FAF6EE', 100: '#F5EDDD', 200: '#EBDABB', 300: '#E1C799',
      400: '#D7B477', 500: '#C9A86C', 600: '#B08F4E', 700: '#8C723E',
      800: '#68552F', 900: '#44381F', 950: '#221C10',
    },
    accent: {
      DEFAULT: '#6B9080',
      50: '#F1F5F4', 100: '#E3EBE9', 200: '#C7D7D3', 300: '#ABC3BD',
      400: '#8FAFA7', 500: '#6B9080', 600: '#567366', 700: '#41564D',
      800: '#2C3A33', 900: '#171D1A', 950: '#0C0F0D',
    },
  },

  // ──────────────────────────────────────────
  // THEME 3: "Modern Healthcare"
  // Teal + Coral - Fresh, Caring, Approachable
  // ──────────────────────────────────────────
  modernHealthcare: {
    primary: {
      DEFAULT: '#0D7377',
      50: '#E6F6F7', 100: '#CDEDEF', 200: '#9BDBDF', 300: '#69C9CF',
      400: '#37B7BF', 500: '#0D7377', 600: '#0B5F62', 700: '#094B4D',
      800: '#073738', 900: '#042323', 950: '#021212',
    },
    secondary: {
      DEFAULT: '#E85D4C',
      50: '#FDF0EE', 100: '#FBE1DD', 200: '#F7C3BB', 300: '#F3A599',
      400: '#EF8777', 500: '#E85D4C', 600: '#D4432F', 700: '#A33424',
      800: '#72251A', 900: '#41160F', 950: '#210B08',
    },
    accent: {
      DEFAULT: '#14BDEB',
      50: '#E7F9FD', 100: '#CFF3FB', 200: '#9FE7F7', 300: '#6FDBF3',
      400: '#3FCFEF', 500: '#14BDEB', 600: '#109AC0', 700: '#0C7795',
      800: '#08546A', 900: '#04313F', 950: '#021920',
    },
  },

  // ──────────────────────────────────────────
  // THEME 4: "Royal Hospitality"
  // Deep Navy + Rose Gold - Prestigious, Warm, Refined
  // ──────────────────────────────────────────
  royalHospitality: {
    primary: {
      DEFAULT: '#1A1F36',
      50: '#E8E9ED', 100: '#D1D3DB', 200: '#A3A7B7', 300: '#757B93',
      400: '#474F6F', 500: '#1A1F36', 600: '#16192D', 700: '#121424',
      800: '#0E0F1B', 900: '#090A12', 950: '#050509',
    },
    secondary: {
      DEFAULT: '#B76E79',
      50: '#F8F0F2', 100: '#F1E1E5', 200: '#E3C3CB', 300: '#D5A5B1',
      400: '#C78797', 500: '#B76E79', 600: '#9C5561', 700: '#7B4249',
      800: '#5A3035', 900: '#391E21', 950: '#1D0F11',
    },
    accent: {
      DEFAULT: '#7EB8C9',
      50: '#F2F8FA', 100: '#E5F1F5', 200: '#CBE3EB', 300: '#B1D5E1',
      400: '#97C7D7', 500: '#7EB8C9', 600: '#5A9FB5', 700: '#46808F',
      800: '#346169', 900: '#224143', 950: '#112122',
    },
  },

  // ──────────────────────────────────────────
  // THEME 5: "Clean & Fresh"
  // Slate Blue + Mint - Clinical, Pure, Modern
  // ──────────────────────────────────────────
  cleanFresh: {
    primary: {
      DEFAULT: '#475B74',
      50: '#EEF0F3', 100: '#DDE1E7', 200: '#BBC3CF', 300: '#99A5B7',
      400: '#77879F', 500: '#475B74', 600: '#3B4C61', 700: '#2F3D4E',
      800: '#232E3B', 900: '#171F28', 950: '#0C1014',
    },
    secondary: {
      DEFAULT: '#48C9B0',
      50: '#ECF9F6', 100: '#D9F3ED', 200: '#B3E7DB', 300: '#8DDBC9',
      400: '#67CFB7', 500: '#48C9B0', 600: '#37A18C', 700: '#2A7968',
      800: '#1D5144', 900: '#102920', 950: '#081510',
    },
    accent: {
      DEFAULT: '#85C1E9',
      50: '#F4F9FC', 100: '#E9F3F9', 200: '#D3E7F3', 300: '#BDDBEC',
      400: '#A7CFE6', 500: '#85C1E9', 600: '#5BAADE', 700: '#3591D3',
      800: '#2972A8', 900: '#1D527A', 950: '#10293D',
    },
  },

  // ──────────────────────────────────────────
  // THEME 6: "Warm Earth"
  // Terracotta + Sage - Organic, Grounded, Homely
  // ──────────────────────────────────────────
  warmEarth: {
    primary: {
      DEFAULT: '#8B5A3C',
      50: '#F5EDE8', 100: '#EBDBD1', 200: '#D7B7A3', 300: '#C39375',
      400: '#AF6F47', 500: '#8B5A3C', 600: '#724A32', 700: '#593A27',
      800: '#402A1C', 900: '#271A11', 950: '#140D09',
    },
    secondary: {
      DEFAULT: '#9CAF88',
      50: '#F4F6F2', 100: '#E9EDE5', 200: '#D3DBCB', 300: '#BDC9B1',
      400: '#A7B797', 500: '#9CAF88', 600: '#7D9466', 700: '#61734F',
      800: '#455238', 900: '#293121', 950: '#151911',
    },
    accent: {
      DEFAULT: '#D4A373',
      50: '#FBF6F0', 100: '#F7EDE1', 200: '#EFDBC3', 300: '#E7C9A5',
      400: '#DFB787', 500: '#D4A373', 600: '#C08548', 700: '#966635',
      800: '#6B4826', 900: '#402B17', 950: '#20160C',
    },
  },

  // ──────────────────────────────────────────
  // THEME 7: "Ocean Breeze"
  // Ocean Blue + Sandy Beige - Calming, Professional, Coastal
  // ──────────────────────────────────────────
  oceanBreeze: {
    primary: {
      DEFAULT: '#2E5077',
      50: '#EBF0F5', 100: '#D7E1EB', 200: '#AFC3D7', 300: '#87A5C3',
      400: '#5F87AF', 500: '#2E5077', 600: '#264262', 700: '#1E344D',
      800: '#162638', 900: '#0E1823', 950: '#070C12',
    },
    secondary: {
      DEFAULT: '#E8C07D',
      50: '#FDF9F0', 100: '#FBF3E1', 200: '#F7E7C3', 300: '#F3DBA5',
      400: '#EFCF87', 500: '#E8C07D', 600: '#DDA64E', 700: '#C08628',
      800: '#8F641E', 900: '#5E4214', 950: '#2F210A',
    },
    accent: {
      DEFAULT: '#4DA8DA',
      50: '#EEF7FC', 100: '#DDEFFA', 200: '#BBDFF5', 300: '#99CFF0',
      400: '#77BFEB', 500: '#4DA8DA', 600: '#2B8CC0', 700: '#216B93',
      800: '#174A66', 900: '#0D2939', 950: '#07151D',
    },
  },

  // ──────────────────────────────────────────
  // THEME 8: "Luxe Purple"
  // Deep Violet + Gold - Opulent, Sophisticated, VIP
  // ──────────────────────────────────────────
  luxePurple: {
    primary: {
      DEFAULT: '#4A3560',
      50: '#EEE9F2', 100: '#DDD3E5', 200: '#BBA7CB', 300: '#997BB1',
      400: '#774F97', 500: '#4A3560', 600: '#3D2B4F', 700: '#30213E',
      800: '#23172D', 950: '#090710',
      900: '#160D1C',
    },
    secondary: {
      DEFAULT: '#D4AF37',
      50: '#FBF6E6', 100: '#F7EDCD', 200: '#EFDB9B', 300: '#E7C969',
      400: '#DFB737', 500: '#D4AF37', 600: '#AC8E2C', 700: '#846D22',
      800: '#5C4C18', 900: '#342B0E', 950: '#1A1607',
    },
    accent: {
      DEFAULT: '#9B7BB8',
      50: '#F5F2F8', 100: '#EBE5F1', 200: '#D7CBE3', 300: '#C3B1D5',
      400: '#AF97C7', 500: '#9B7BB8', 600: '#7C5A9E', 700: '#5F457A',
      800: '#423056', 900: '#251B32', 950: '#130E19',
    },
  },

  // ──────────────────────────────────────────
  // THEME 9: "Brand Signature"
  // Logo Colors - Dark Teal Shield + Golden Arrow
  // Matches LTHS Logo Identity
  // ──────────────────────────────────────────
  brandSignature: {
    primary: {
      DEFAULT: '#2D5058',
      50: '#EBF1F2', 100: '#D7E3E5', 200: '#AFC7CB', 300: '#87ABB1',
      400: '#5F8F97', 500: '#2D5058', 600: '#264349', 700: '#1E363A',
      800: '#17292B', 900: '#0F1C1C', 950: '#080E0E',
    },
    secondary: {
      DEFAULT: '#C7A067',
      50: '#FAF6EF', 100: '#F5EDDF', 200: '#EBDABF', 300: '#E0C79F',
      400: '#D4B383', 500: '#C7A067', 600: '#A88350', 700: '#84663E',
      800: '#60492C', 900: '#3C2C1A', 950: '#1E160D',
    },
    accent: {
      DEFAULT: '#4A7C86',
      50: '#EDF4F5', 100: '#DBE9EB', 200: '#B7D3D7', 300: '#93BDC3',
      400: '#6FA7AF', 500: '#4A7C86', 600: '#3D666E', 700: '#305056',
      800: '#233A3E', 900: '#162426', 950: '#0B1213',
    },
  },
}

// ⬇️ CHANGE THIS TO SWITCH THEME ⬇️
const activeTheme = 'brandSignature'
// Options: 'corporateTrust' | 'elegantEmerald' | 'modernHealthcare' | 'royalHospitality' | 'cleanFresh' | 'warmEarth' | 'oceanBreeze' | 'luxePurple' | 'brandSignature'

const selectedTheme = themes[activeTheme]

// ============================================
// 🔤 FONT PRESETS - Change 'activeFont' to switch!
// ============================================

const fontPairings = {
  // ──────────────────────────────────────────
  // FONT 1: "Classic Elegance" (Current)
  // Sophisticated, Trustworthy, Timeless
  // ──────────────────────────────────────────
  classicElegance: {
    display: ['Playfair Display', 'Georgia', 'serif'],
    body: ['DM Sans', 'system-ui', 'sans-serif'],
    googleFonts: 'Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700',
  },

  // ──────────────────────────────────────────
  // FONT 2: "Modern Professional"
  // Clean, Corporate, Tech-forward
  // ──────────────────────────────────────────
  modernProfessional: {
    display: ['Inter', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
    googleFonts: 'Inter:wght@400;500;600;700;800',
  },

  // ──────────────────────────────────────────
  // FONT 3: "Warm & Welcoming"
  // Approachable, Caring, Professional
  // Best for healthcare/patient care
  // ──────────────────────────────────────────
  warmWelcoming: {
    display: ['Libre Baskerville', 'Georgia', 'serif'],
    body: ['Source Sans 3', 'system-ui', 'sans-serif'],
    googleFonts: 'Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;500;600;700',
  },

  // ──────────────────────────────────────────
  // FONT 4: "Bold & Confident"
  // Strong, Dependable, Modern
  // Best for industrial clients
  // ──────────────────────────────────────────
  boldConfident: {
    display: ['Montserrat', 'system-ui', 'sans-serif'],
    body: ['Open Sans', 'system-ui', 'sans-serif'],
    googleFonts: 'Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700',
  },

  // ──────────────────────────────────────────
  // FONT 5: "Luxury Hospitality"
  // Refined, Exclusive, Premium
  // Best for high-end services
  // ──────────────────────────────────────────
  luxuryHospitality: {
    display: ['Cormorant Garamond', 'Georgia', 'serif'],
    body: ['Lato', 'system-ui', 'sans-serif'],
    googleFonts: 'Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@400;700',
  },

  // ──────────────────────────────────────────
  // FONT 6: "Clean & Friendly"
  // Fresh, Approachable, Youthful
  // ──────────────────────────────────────────
  cleanFriendly: {
    display: ['Poppins', 'system-ui', 'sans-serif'],
    body: ['Nunito', 'system-ui', 'sans-serif'],
    googleFonts: 'Poppins:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700',
  },

  // ──────────────────────────────────────────
  // FONT 7: "Corporate Trust"
  // Authoritative, Stable, Professional
  // Best for institutional clients
  // ──────────────────────────────────────────
  corporateTrust: {
    display: ['Merriweather', 'Georgia', 'serif'],
    body: ['Roboto', 'system-ui', 'sans-serif'],
    googleFonts: 'Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700',
  },

  // ──────────────────────────────────────────
  // FONT 8: "Contemporary Elegance"
  // Creative, Distinctive, Premium
  // ──────────────────────────────────────────
  contemporaryElegance: {
    display: ['Fraunces', 'Georgia', 'serif'],
    body: ['Work Sans', 'system-ui', 'sans-serif'],
    googleFonts: 'Fraunces:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700',
  },

  // ──────────────────────────────────────────
  // FONT 9: "Geometric Modern"
  // Cutting-edge, Precise, Smart
  // ──────────────────────────────────────────
  geometricModern: {
    display: ['Space Grotesk', 'system-ui', 'sans-serif'],
    body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
    googleFonts: 'Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700',
  },

  // ──────────────────────────────────────────
  // FONT 10: "Timeless Sophistication"
  // Classic, Refined, Accessible
  // ──────────────────────────────────────────
  timelessSophistication: {
    display: ['Crimson Pro', 'Georgia', 'serif'],
    body: ['Karla', 'system-ui', 'sans-serif'],
    googleFonts: 'Crimson+Pro:wght@400;500;600;700&family=Karla:wght@400;500;600;700',
  },
}

// ⬇️ CHANGE THIS TO SWITCH FONTS ⬇️
const activeFont = 'boldConfident'
// Options: 'classicElegance' | 'modernProfessional' | 'warmWelcoming' | 'boldConfident' | 'luxuryHospitality' | 'cleanFriendly' | 'corporateTrust' | 'contemporaryElegance' | 'geometricModern' | 'timelessSophistication'

const selectedFont = fontPairings[activeFont]

// Export for use in nuxt.config.ts
export { fontPairings, activeFont, selectedFont }

// ============================================
// TAILWIND CONFIGURATION
// ============================================

export default {
  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        primary: selectedTheme.primary,
        secondary: selectedTheme.secondary,
        accent: selectedTheme.accent,
        
        // Neutral colors (consistent across themes)
        charcoal: {
          DEFAULT: '#2C3E50',
          50: '#F4F6F7', 100: '#E9EDEF', 200: '#D3DBDF', 300: '#BDC9CF',
          400: '#8FA3B0', 500: '#617D91', 600: '#4A6073', 700: '#3B4D5C',
          800: '#2C3E50', 900: '#1D2A36', 950: '#0F151B',
        },
      },
      
      fontFamily: {
        display: selectedFont.display,
        body: selectedFont.body,
      },
      
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: `0 0 20px ${selectedTheme.secondary.DEFAULT}4D` },
          '50%': { boxShadow: `0 0 40px ${selectedTheme.secondary.DEFAULT}99` },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
} satisfies Config
