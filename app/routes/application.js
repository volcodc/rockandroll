import Ember from 'ember';
import songs from '../mixins/songs';

export default Ember.Route.extend({
	model: function() {
		return songs;
	}
});
