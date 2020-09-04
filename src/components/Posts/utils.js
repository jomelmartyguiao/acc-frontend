export function dropdownFormatter(data) {
	let newData = [];
	if(data){
		data.map(item => {
			return newData = newData.concat({key: item.id, text: item.name, value: item.id});
		})} else {
		return null;
	}
	return newData;
}

export function dataURLtoFile(dataurl, filename) {
	let arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, {type:mime});
  };