import { defineStore } from 'pinia'
import piniaPersistConfig from '../configs/persist'

// 定义状态的类型 一般情况下Pinia会自动推断出state的类型，你就无需定义接口.
// 如果state的数据类型比较复杂，推荐你定义一个接口来描述state的类型.
interface IUserState {
    firstName: string
    lastName: string
}

const useUserStore = defineStore('user',{
    state: (): IUserState => ({
        firstName: 'Long',
        lastName: 'Day'
    }),
    getters: {
        fullName(): string {
            return this.firstName + ' ' + this.lastName
        }
    },
    actions: {
        updateLastName(lastName: string) {
            this.lastName = lastName
        }
    },
    // 表示这个store里的数据都将持久化存储
    persist: piniaPersistConfig('user',['lastName'])
 })

export default useUserStore