declare let M: any

export class MaterialService {
    static toast(message: string) {
        M.toast({html: message})
    }
}