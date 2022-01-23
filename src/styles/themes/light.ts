import loginBanner from '../../assets/light1.png'
import logoutIcon from '../../assets/logout.png';
import closeIcon from '../../assets/close.png';
import heartIcon from '../../assets/heart.png'
import heartFillIcon from '../../assets/heart-fill.png'

const lightTheme = {
  name: "light",
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
    background: '#FFCB05',
    exitButtonBorderColor: '#1E1E1F',
    exitButtonIcon: logoutIcon,
    badgeTextColor: '#FFFFFF',
    badgeColor: '#1E1E1F',
    menuActiveColor: '#1E1E1F',
  },
  login: {
    banner: loginBanner,
    titleColor: '#1E1E1F'
  },
  global: {
    background: '#F5F7FA',
    textColor: '#1E1E1F',
    secondaryTextColor: '#7D7E80',
    input: {
      backgroundColor: '#F5F7FA',
      borderColor: '#7D7E80'
    },
    buttonSeconday: '#7D7E80'
  },
  detailsModal:{
    background: '#FFFFFF',
    statsFavTextColor: '#1E1E1F',
    statsTextColor: '#1E1E1F',
    imageBgColor: '#F5F7FA',
    closeIcon: closeIcon
  },
  card:{
    background: '#FFFFFF',
    heartIcon,
    heartFillIcon,
  }
}

export default lightTheme;