package de.wawuschels.todo_game.domain.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class WorkItem {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToOne
    private ItemEntity item;
}

