var mongourl = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb+srv://mongodb:mongodb@cluster0-9aikq.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
	// mongo database connection url
	url : mongourl
};
