import { StyleSheet } from 'react-native';
export const MainPageStyle = StyleSheet.create({
     MainContainer :{
        flexGrow : 1,
        backgroundColor: "#F2F2F2",
        position : "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        display: "flex",
        flexDirection : "column"
     },
     header : {
        position : 'relative',
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection : "row",
        flexGrow : 0.2,
     },
     footer : {
        display : 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        flexGrow: 0.1,

     },
     contentContainer : {
        flexGrow : 5,
        display : 'flex',
        justifyContent: 'space-around'
     }
})


export const MenuStyle = StyleSheet.create({
    MainContainer :{
      backgroundColor: "#FA4A0C",
      height: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems :"flex-start",
    },
    InnerContainer : {
        display :"flex",
        flexDirection: "row" ,
        alignItems: "center" ,
        borderRadius : 10,
        borderColor : 'white',
        padding: 2
    },
    InnerContainer2 : {
        display :"flex",
        flexDirection: "row" ,
        alignItems: "center" ,
        marginLeft: 25,
        zIndex: 20,
        
    },
    contentContainer : {
         width: 132,
         backgroundColor : "#FFFFFF",
         height : 0.3,
         marginLeft : 10,
         marginTop: 25,
    },
    TextStyle: {
        color: "#FFFFFF",
        textAlign : 'center',
        marginLeft : 10
    }

})


