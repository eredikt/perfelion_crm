//@ts-ignore
export function isAuth(to:any, from:any, next: any){
    if (to.name.split('_')[0] !== 'crm' && JSON.parse(localStorage.getItem('auth') as string)?.user?.status) return next({name: 'crm_goods'});
    return next();
}
