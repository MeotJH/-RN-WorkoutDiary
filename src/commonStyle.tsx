interface themeIF {
    bg: string;
    container: object;
  }

export const theme : themeIF ={
    bg: "black",
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
}