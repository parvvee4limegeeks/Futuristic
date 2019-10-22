import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'



function* sampleTest(action){

        return "sample value"

}

export default function* rootSaga() {



        yield takeEvery("test_sample",  sampleTest)




}