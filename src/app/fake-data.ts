import { Observable, of } from "rxjs";
import { MarvelCharacter } from "./MarvelTypes";

export let fakeMarvelData$:Observable<MarvelCharacter[]> =  of([{
    id: '1',
    name: 'Hulk',
    description: 'Mantiene enojado',
    thumbnail: {path:'', extension:''}
},
{
    id: '2',
    name: 'Capitan América',
    description: 'Es el mas calmado',
    thumbnail: {path:'', extension:''}
},
{
    id: '3',
    name: 'Iron Man',
    description: 'Tiene dineo',
    thumbnail: {path:'', extension:''}
},
{
    id: '4',
    name: 'Viuda Negra',
    description: 'Realmente bonita',
    thumbnail: {path:'', extension:''}
},
]);