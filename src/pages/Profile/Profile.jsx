import { useEffect, useState } from "react"

const Profile = () => {
    const [profileData, setProfileData] = useState(null)

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const result = await response.json();
                setProfileData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getProfile()
    }, [])
    return <div style={{textAlign: "left"}}>
        <a href="/">Home</a>
        {profileData && <table>
            <tbody>
                <tr>
                    <th>Nama</th>
                    <th style={{width: '20px'}}>:</th>
                    <td>{profileData.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <th style={{width: '20px'}}>:</th>
                    <td>{profileData.email}</td>
                </tr>
                <tr>
                    <th>Alamat</th>
                    <th style={{width: '20px'}}>:</th>
                    <td>{`${profileData.address.street}, ${profileData.address.suite} ${profileData.address.city} - ${profileData.address.zipcode} `}</td>
                </tr>
                <tr>
                    <th>No. Telefon</th>
                    <th style={{width: '20px'}}>:</th>
                    <td>{profileData.phone}</td>
                </tr>
                <tr>
                    <th>Perusahaan</th>
                    <th style={{width: '20px'}}>:</th>
                    <td>{`${profileData.company.name}`}</td>
                </tr>
            </tbody>
        </table>}
    </div>
}

export default Profile