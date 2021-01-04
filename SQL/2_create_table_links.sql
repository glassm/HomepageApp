-- auto-generated definition
create table links
(
    link_nr     bigserial not null
        constraint links_pk
            primary key,
    group_nr    bigint    not null
        constraint links_link_group_group_nr_fk
            references link_group,
    description varchar   not null,
    url         varchar   not null
);

alter table links
    owner to homepage;

create unique index links_title_uindex
    on links (description);

create unique index links_url_uindex
    on links (url);

