/*
 * @Author: LinRenJie
 * @Date: 2023-01-15 10:56:05
 * @LastEditTime: 2023-01-15 12:19:39
 * @Description: 
 * @FilePath: /react/src/hooks/useLocalStorage.ts
 * @Email: xoxosos666@gmail.com
 */
import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initValue: T
    | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initValue === 'function') {
            return (initValue as () => T)()
        } else {
            return initValue
        }
    })
    useEffect(() => {   // 数组变化就会执行
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue] as [typeof value, typeof setValue]
}