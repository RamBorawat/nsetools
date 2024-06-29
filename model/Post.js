import { Model } from '@nozbe/watermelondb'
import { children, field, lazy } from '@nozbe/watermelondb/decorators'

export default class Post extends Model {
    static table = 'posts'

    @field('post_id') post_id;

    @lazy verifiedComments = this.comments.extend(
        Q.where('is_verified', true)
    )
}