export default function obj2Form(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });

    return formData

}