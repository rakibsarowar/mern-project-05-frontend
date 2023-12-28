import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import useAuth from '../useAuth/useAuth';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    // const token = localStorage.getItem('access-token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // Dont need now because of using axios interceptor -----
        // queryFn: async () => {
        //     const res = await fetch (`http://localhost:5000/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     console.log('res from axios', res)
        //     return res.json();
        // },

        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }

    })

    return [cart, refetch]

}
export default useCart;
