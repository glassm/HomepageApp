-- auto-generated definition
create table link_group
(
    group_nr    bigserial not null
        constraint link_group_pk
            primary key,
    group_title varchar   not null
);

alter table link_group
    owner to homepage;

create unique index link_group_group_nr_uindex

    on link_group (group_nr);

create unique index link_group_title_uindex
    on link_group (group_title);
