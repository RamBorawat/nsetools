import { database } from "../../..";
import { Q } from '@nozbe/watermelondb'
export default async function () {
    const postsCollection = await database.get('comments').query().fetch()
    // const postsCollections = database.get('posts').query(
    //     Q.unsafeSqlExpr(`posts.post_id == "ram"`)
    // )
    // postsCollection.map(x => {
    //     console.log(x)
    // })
    console.log(postsCollection.length);
    // const numberOfStarredPosts = await database.get('posts').query(
    //     // Q.or(
    //     Q.where(
    //         'post_id', "jaisreeramanam"
    //         // Q.like(`%${Q.sanitizeLikeString("jaisreeram")}%`),
    //     ),
    //     // Q.where('post_id', Q.like(`%${Q.sanitizeLikeString(search)}%`)),
    //     // ),
    // ).fetchCount()

    // console.log(numberOfStarredPosts, 'this is number')
    //     Q.unsafeSqlQuery(
    //         `select "posts".* from "posts" where instr("posts"."post_id", 'ram') and "posts"."_status" is not 'deleted'`
    //     ),

    // ).unsafeFetchRaw();
    // console.log('fetching')
    // console.log('fetching')
    // const postsCollection = await database.get('posts').query(
    //     // 'post_id', 'ram'
    //     // Q.on('posts', 'post_id', 'ram')
    //     Q.where('post_id', Q.includes('am'))
    //     // Q.where('post_id', Q.like(`%${Q.sanitizeLikeString('ram')}%`))
    // ).fetch()

    console.log(postsCollection.length)
    // console.log(postsCollection.length)
    // postsCollection.map(x => {
    //     // console.log(x, 'this is individual')
    // })
    // console.log(postsCollection.length, 'this is length')
    // console.log('fetching')
    // console.log(postsCollection)

    // const comment = await database.get('posts').find('qSedffkJ67tCujab')
    // console.log(comment, 'this is comment')
    // await database.write(async () => {
    //     await comment.destroyPermanently()
    // })

    // const pcond = database.get('posts').query(
    //     // Q.where('post_id', 'ram')
    //     Q.where('post_id', 'jaisreeramnam')
    // )
    //     .then((x) => {
    //         console.log(x, 'this is record')

    //     }).catch(e => console.log(e, 'this is error'))

    // console.log('postsCollections._sql()')
    // console.log(postsCollections)
    // console.log(postsCollections._sql())
    // // console.log('postsCollections._sql()')
    // // console.log(pcond._sql())
    // const pp = await pcond.fetch()

    // // postsCollection.collections.map(x => {
    // console.log(x)
    // })
    // console.log('pp')
    // console.log(pp)
    // console.log('pp')
    // console.log(pcond)
    // console.log((await pcond).length)
    // return postsCollection;
}