declare interface Window{
    _nMessage : NMessage
}
interface NMessage{
    info(msg:string);
    error(msg:string);
    warning(msg:string);
    success(msg:string);
    loading(msg:string);
}