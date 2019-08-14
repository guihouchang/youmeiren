import {
    _,
    __
} from 'react-native-scale-size';
import T from './Theme';

import {SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT} from 'react-native-dotenv';

// 全局样式
export default {

    // 标题
    title_text: {
        fontSize: _(21),
        lineHeight: _(29),
        color: '#fff',
        fontFamily: 'STYuanti-SC-Regular',
        fontWeight: '400',
    },

    // 子标题
    sub_title_text: {
        fontSize: _(20),
        fontFamily: 'STYuanti-SC-Bold',
        fontWeight: 'bold',
        color: T.brand_primary,
        lineHeight: _(27)
    },

    // 提示字体样式
    tips_text: {
        color: '#525252',
        fontSize: _(15),
        lineHeight: _(21),
        fontFamily: 'STYuanti-SC-Bold',
    },
    // 提示字体样式反色
    tips_text_inverse: {
        color: T.brand_primary,
        fontSize: _(15),
        lineHeight: _(21),
        fontFamily: 'STYuanti-SC-Bold',
    },
    tips_text_small: {
        lineHeight: _(15),
        fontSize: _(10),
        color: T.color_text_secondary,
        marginLeft: _(6),
        fontFamily: 'STYuanti-SC-Bold',
    },
    text_lm: {
        lineHeight: _(27),
        fontSize: _(19),
        color: T.color_text_base,
        fontFamily: 'STYuanti-SC-Bold',
    },
    text_md: {
        lineHeight: _(22),
        fontSize: _(16),
        color: T.color_text_base,
        fontFamily: 'STYuanti-SC-Bold',
    },
    text_small: {
        lineHeight: _(15),
        fontSize: _(10),
        color: T.color_text_secondary,
        fontFamily: 'STYuanti-SC-Bold',
    },

    // 输入框
    input_xs: {},
    input_sm: {},
    input_md: {
        fontSize: __(T.input_font_size),
        width: _(T.input_label_width),
        borderColor: T.border_color_base,
        borderWidth: __(T.border_width_sm),
        color: T.input_color_icon,
        height: _(T.input_label_height),
        borderRadius: _(T.radius_md),
        paddingLeft: _(T.h_spacing_md * 4),
    },
    input_lg: {},
    inputStyle: {
        color: '#525252',
        paddingLeft: _(17),
        width: _(258),
        height: _(44),
        borderRadius: _(6),
        backgroundColor: '#EFEFEF',
        fontSize: _(20),
        fontFamily: "STYuanti-SC-Regular",
        fontWeight: "400",
    },
    inlineImage: {
        width: _(15),
        height: _(21),
        position: 'absolute',
        right: _(19),
        top: _(11),
    },

    // 按钮
    button_xs: {},
    button_sm: {},
    button_md: {
        height: _(T.button_height),
        // fontSize: T.button_font_size,
        width: _(T.button_width_size)
    },
    button_lg: {},
    button: {
        borderRadius: _(6),
        borderWidth: 0,
        width: _(258),
        height: _(44),
    },
    buttonTitle: {fontWeight: "bold", fontSize: _(20), lineHeight: _(27)},
    followButton: {
        width:_(40),
        height: _(22),
        borderRadius: _(4),
        borderColor: T.brand_primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    followButtonText: {
        ... this.text_md,
        color: T.brand_primary,
    },

    //  shadow
    shadow: {
        width:_(258),
        height: _(44),
        color:"#000",
        border: 4,
        radius: _(6),
        opacity:0.1,
        x:0,
        y:0,
    },
    base_size_width: _(SIZE_MATTERS_BASE_WIDTH),
    base_size_height: _(SIZE_MATTERS_BASE_HEIGHT),
    imageContent: {
        borderRadius: _(6),
        width: _(230),
        height: '100%',
        borderWidth: 0,
        borderColor: '#cccccc'
    },
    smallImageContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    smallImageItem: {
        width: _(112),
        height: _(112),
        borderRadius: _(6),
        borderWidth: 0,
        borderColor: '#cccccc',
        backgroundColor: '#ff8b5d'
    },
}

