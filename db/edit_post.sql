UPDATE posts 
SET title = $1,
    content = $2,
    img = $3
WHERE id = $4;

select * from posts
order by id ASC;