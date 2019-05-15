import axios, {AxiosError } from 'axios';

class Cms {
    public projectId: string;
    public url: string;

    public constructor(projectId: string){
        this.projectId = projectId;
        this.url = 'https://translation-backend.sevenamstudio.com/api/content/' + projectId + '/'
    }
    public getContent(type: string, name: string, language: string): Promise<object | AxiosError> {
        let url = this.url + type + '/' + name + '/' + language;
        return axios.get(url).then((data)=>{
            return data.data[0].content;
        }, (error): AxiosError => {
            return error;
        })
    }

}
// console.log("test");
// const cmsObj = new Cms('5cd32397704b4f4792dac3be');
// cmsObj.getContent('component', 'header', 'Polish').then((data)=>{
//   console.log(data);
// }, (error): AxiosError => {
//   console.log(error);
// });

export {Cms};
