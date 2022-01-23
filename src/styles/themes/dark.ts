import loginBanner from '../../assets/dark1.png'
import logoutIcon from '../../assets/logoutdark.png';
import closeIcon from '../../assets/closedark.png';
import heartIcon from '../../assets/heart-dark.png'
import heartFillIcon from '../../assets/heartfill-dark.png'

const darkTheme = {
  name: "dark",
  colors: {
    primary: '#FFCB05',
    secondary: '#3B5CA8',
    alert_danger: '#FF3326',
    alert_success: '#45B572',
    alert_warning: '#F9AA35',
    white: '#FFFFFF',
    grey_100: '#F5F7FA',
    grey_200: '#D2D4D6',
    grey_300: '#7D7E80',
    grey_400: '#4B4B4D',
    grey_500: '#1E1E1F',
  },
  navBar: {
    height: "50px",
    background: '#4B4B4D',
    exitButtonBorderColor: '#FFFFFF',
    exitButtonIcon: logoutIcon,
    badgeTextColor: '#1E1E1F',
    badgeColor: '#FFCB05',
    menuActiveColor: '#FFCB05',
  },
  login: {
    banner: loginBanner,
    titleColor: '#FFCB05'
  },
  global: {
    background: '#1E1E1F',
    textColor: '#F5F7FA',
    secondaryTextColor: '#D2D4D6',
    input:{
      backgroundColor: '#1E1E1F',
      borderColor: '#FFFFFF'
    },
    buttonSeconday: '#FFFFFF'
  },
  detailsModal:{
    background: '#4B4B4D',
    statsFavTextColor: '#FFCB05',
    statsTextColor: '#FFFFFF',
    imageBgColor: '#7D7E80',
    closeIcon: closeIcon,
  },
  card:{
    background: '#4B4B4D',
    heartIcon,
    heartFillIcon,
  }
}

export default darkTheme;