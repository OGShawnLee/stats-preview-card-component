import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    colors: {
      blue: {
        800: 'hsl(244, 38%, 16%)',
        900: 'hsl(233, 47%, 7%)',
      },
      violet: 'hsl(277, 64%, 61%)',
      white: '#FFF',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      lexand: ['Lexand Deca', 'sans-serif'],
    },
  },
});
