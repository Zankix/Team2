
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
export default function useLogout() {
    const router = useRouter();
    const pb = new PocketBase('http://127.0.0.1:8090');
    function logout (){
        pb.authStore.clear();
        router.push('http://localhost:3000');
    }
    return logout
}
