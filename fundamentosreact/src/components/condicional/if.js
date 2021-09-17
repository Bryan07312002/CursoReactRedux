export default function RenderizacaoCondicional(props){
    if(props.test){
        return props.children;
    }else{
        return false
    }
}