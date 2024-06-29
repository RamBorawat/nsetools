import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
    const [temples, setTemples] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const getTemples = async () => {
            setLoading(true);
            // Fetch temples from API or database
            const data = [
                {
                    id: 1,
                    name: 'Temple 1',
                    location: 'Chennai',
                    deities: ['Lord Shiva', 'Goddess Parvati'],
                },
                {
                    id: 2,
                    name: 'Temple 2',
                    location: 'Madurai',
                    deities: ['Lord Vishnu', 'Goddess Lakshmi'],
                },
            ];
            setTemples(data);
            setLoading(false);
        };
        getTemples();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('TempleDetails', { templeId: item.id })
                }>
                <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                    <Text style={{ fontSize: 14 }}>{item.location}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={{ height: 40, borderColor: '#ccc', borderWidth: 1, padding: 10 }}
                placeholder="Search temples by name or location"
                onChangeText={text => setSearch(text)}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <FlatList
                    data={temples.filter(
                        temple =>
                            temple.name.toLowerCase().includes(search.toLowerCase()) ||
                            temple.location.toLowerCase().includes(search.toLowerCase())
                    )}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}
        </View>

    );
}

const styles = StyleSheet.create({})

export default Homepage;


