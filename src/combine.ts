import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import Debug from 'debug';
const debug: Debug.IDebugger = Debug('co:redux/combine.ts');

// TODO: Move to own module together with ReducerRegistry: twitter-dynamic-reducers
export function combine<T>(reducers: ReducersMapObject, activeState: T): Reducer<T> {
    const reducerNames: string[] = Object.keys(reducers);
    debug('REDUCER_NAMES', reducerNames);
    Object.keys(activeState)
        .forEach((item: string) => {
            if (reducerNames.indexOf(item) === -1) {
                debug('reducers[item]', reducers[item]);
                reducers[item] = (state: any = null): any => {
                    debug('STATE', state);

                    return state;
                };
                debug('reducers[item AFTER]', reducers[item]);
            }
        });
    debug('reducers AFTER', reducers);

    return combineReducers<T>(reducers);
}

// // TODO: Move to own module together with ReducerRegistry: twitter-dynamic-reducers
// export const combine: Function = (reducers: ReducersMapObject, activeState: GlobalStoreState): Reducer<GlobalStoreState> => {
//     const reducerNames: string[] = Object.keys(reducers);
//     // debug('REDUCER_NAMES', reducerNames);
//     Object.keys(activeState)
//         .forEach((item: string) => {
//             if (reducerNames.indexOf(item) === -1) {
//                 //   debug('reducers[item]', reducers[item]);
//                 reducers[item] = (state: any = null): any => {
//                     // debug('STATE', state);

//                     return state;
//                 };
//                 //   debug('reducers[item AFTER]', reducers[item]);
//             }
//         });
//     // debug('reducers AFTER', reducers);

//     return combineReducers<GlobalStoreState>(reducers);
// };
