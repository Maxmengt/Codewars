/*
function isArray(o) {
	return Object.prototype.toString.call(o) == '[object Array]';
}
*/
Array.prototype.sameStructureAs = function (other) {
    if( !isArray(other) || this.length != other.length ) return false;
    return this.every((item, index) => isArray(item) ? item.sameStructureAs(other[index]) : !isArray(other[index]));
};