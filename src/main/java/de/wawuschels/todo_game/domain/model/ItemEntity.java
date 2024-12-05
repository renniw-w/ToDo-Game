package de.wawuschels.todo_game.domain.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "item")
@Data
@SequenceGenerator(name = "item_seq", allocationSize = 1 )
public class ItemEntity {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "item_seq")
    private Long id;

    @Column
    private String name;

    @Column
    private Long score;

    @Column
    private String description;
}
