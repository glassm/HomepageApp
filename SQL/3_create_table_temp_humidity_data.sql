-- auto-generated definition
create table temp_humidity_data
(
    time          timestamp not null
        constraint temp_humidity_data_pk
            primary key,
    sensor_origin varchar,
    temp          integer default 0,
    rh            integer default 0
);

comment on column temp_humidity_data.sensor_origin is '''U'' - upstairs, ''D'' - downstairs';

comment on column temp_humidity_data.temp is 'temperature in celsius';

comment on column temp_humidity_data.rh is 'relative humidity in %';

alter table temp_humidity_data
    owner to homepage;

