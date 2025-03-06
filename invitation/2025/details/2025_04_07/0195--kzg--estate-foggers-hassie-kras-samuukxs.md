### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, foggers, Hassie, Kras, Samuukxs<br />
Global Rank: [195](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [26]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  562.2<br />
<br />
Final Rank Value (562.2) = Starting Rank Value (588.5) + Head To Head Adjustments (-26.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.217[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 588.5
- 400 + ( ( 0.091 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 588.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       31 | 2025-02-25 | Only One Word        | L   | 0.929      | -            | -                | -                | -         |   -13.71 | Estate, foggers, Hassie, Kras, Samuukxs |
|            7 |       36 | 2025-02-25 | MANTRA               | W   | 0.927      | 0.143        | 0.000 (0.000)    | 0.144 (0.019)    | 0 (0.000) |    13.82 | Estate, foggers, Hassie, Kras, Samuukxs |
|            6 |       46 | 2025-02-25 | SemperFi Esports     | L   | 0.922      | -            | -                | -                | -         |   -14.56 | Estate, foggers, Hassie, Kras, Samuukxs |
|            5 |       71 | 2025-02-23 | Justice For Tomorrow | W   | 0.915      | 0.143        | 0.000 (0.000)    | 0.139 (0.018)    | 0 (0.000) |    11.57 | Estate, foggers, Hassie, Kras, Samuukxs |
|            4 |      219 | 2025-02-15 | Housebets            | L   | 0.861      | -            | -                | -                | -         |   -13.42 | Estate, foggers, Hassie, Kras, Samuukxs |
|            3 |      220 | 2025-02-15 | DXA Esports          | W   | 0.861      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.47 | Estate, foggers, Hassie, Kras, Samuukxs |
|            2 |      256 | 2025-02-14 | Justice For Tomorrow | L   | 0.854      | -            | -                | -                | -         |   -16.79 | Estate, foggers, Hassie, Kras, Samuukxs |
|            1 |     1920 | 2024-10-17 | Housebets            | L   | 0.049      | -            | -                | -                | -         |    -0.74 | dpr, Estate, Hassie, Samuukxs, Zuko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54.44)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.068 | $800.00        | $54.44          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
