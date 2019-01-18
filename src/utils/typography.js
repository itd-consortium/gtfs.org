import Typography from "typography"
import githubTheme from "typography-theme-github"

// githubTheme.blockMarginBottom = '50px';

githubTheme.overrideThemeStyles = (options) => ({
  p: {
    marginBottom: '50px',
  } 
})

const typography = new Typography(githubTheme);

export default typography
