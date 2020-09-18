import React from 'react';
import { NavigationContainer } from '@react-navigation/native';//2
//Importa o stack navigator 
import { createStackNavigator } from '@react-navigation/stack';//2
//Coloca o createstacknavitor dentro de uma variavel
const AppStack = createStackNavigator();//2

//importando as paginas a serem usadas na tela para fazer a navegação
//o nome de cada pagin a deve ser colocado no AppStack.Screen
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes(){//1
    return(//1
        //Essencial que va por volta de todas as rotas o NavigationContainer
        <NavigationContainer>
    
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}