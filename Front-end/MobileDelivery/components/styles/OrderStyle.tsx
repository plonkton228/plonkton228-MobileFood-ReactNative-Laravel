import { StyleSheet } from 'react-native';

export const OrderStyle = StyleSheet.create({
    PostContainer : {
        display: "flex",
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",

        maxWidth: 385,
        width: "100%",
        

        backgroundColor: "#FFFFFF",
        borderRadius: 10,
    },
    ImagePost : {
       height: 69,
       maxWidth: 69,
       width: "100%"
    },
    PostInner  : {
        marginLeft: 5,
    },
    TextPost : {
        fontSize: 17,
        fontWeight: "600",

        color: "#000000",

        marginBottom: 8,
        lineHeight: 20,
    },
    CostPost :{
        fontWeight: "600",
        fontSize : 15,
        color: "#FA4A0C",

        lineHeight: 18,

    },

    ButtonPost : {
        width: 314,
        height : 70,
        flexGrow: 0.03,

        backgroundColor: "#FA4A0C",
        borderRadius : 30,
        zIndex : 10,

        alignSelf: "center",
        
        marginTop: 140,
       
        

    },

    ButtonText : {
        color: "#FFFFFF",
        fontWeight: "600",
        textAlign: "center",
    }
    
})