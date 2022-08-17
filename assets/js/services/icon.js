import {
    library as FontawesomeLibrary,
    config as FontawesomeConfig
} from '@fortawesome/fontawesome-svg-core'
import {
    faPlus, faShoppingBag
} from '@fortawesome/pro-light-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

// configure fontawesome
FontawesomeConfig.autoAddCss = false
FontawesomeLibrary.add(
    faPlus, faShoppingBag
)
