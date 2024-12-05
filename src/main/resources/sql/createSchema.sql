create table item
(
    id          int primary key,
    name        varchar(200) not null,
    score       smallint,
    description varchar(1000)
);

create sequence item_seq start 1;

create table player
(
    id   int primary key,
    name varchar(200) not null
);

create sequence player_seq start 1;

create table player_work_item
(
    id       int primary key,
    workItem int not null,
    player   int not null
);

create sequence player_work_item_seq start 1;

create table work_item
(
    id   int primary key,
    name varchar(200),
    item int not null
);


create sequence work_item_seq start 1;

