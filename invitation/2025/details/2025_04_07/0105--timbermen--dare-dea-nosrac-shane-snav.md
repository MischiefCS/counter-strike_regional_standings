### Roster Details<br />
Team Name: Timbermen<br />
Roster: dare, dea, nosraC, shane, snav<br />
Global Rank: [105](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [21]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  731.6<br />
<br />
Final Rank Value (731.6) = Starting Rank Value (701.3) + Head To Head Adjustments (30.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.3
- 400 + ( ( 0.146 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 701.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      837 | 2024-12-15 | NRG                | W   | 0.447      | 0.303        | 0.035 (0.005)    | 0.462 (0.063)    | 0 (0.000) |    10.95 | dare, dea, nosraC, shane, snav |
|            7 |      840 | 2024-12-15 | Nouns Esports      | W   | 0.446      | 0.303        | 0.005 (0.001)    | 0.346 (0.047)    | 0 (0.000) |     8.73 | dare, dea, nosraC, shane, snav |
|            6 |      859 | 2024-12-14 | BOSS               | W   | 0.441      | 0.303        | 0.005 (0.001)    | 0.343 (0.046)    | 0 (0.000) |     9.06 | dare, dea, nosraC, shane, snav |
|            5 |     1252 | 2024-11-24 | NRG                | L   | 0.306      | -            | -                | -                | -         |    -2.11 | dare, dea, nosraC, shane, snav |
|            4 |     1272 | 2024-11-23 | Party Astronauts   | W   | 0.300      | 0.303        | 0.002 (0.000)    | 0.339 (0.031)    | 0 (0.000) |     4.43 | dare, dea, nosraC, shane, snav |
|            3 |     1950 | 2024-10-15 | Familia Maquininha | L   | 0.040      | -            | -                | -                | -         |    -0.75 | aleph, dare, nero, shane, snav |
|            2 |     2010 | 2024-10-09 | Vagrants           | W   | 0.000      | 0.477        | 0.000 (0.000)    | 0.132 (0.000)    | 0 (0.000) |     0.00 | aleph, dare, nero, shane, snav |
|            1 |     2017 | 2024-10-09 | Vagrants           | L   | 0.000      | -            | -                | -                | -         |     0.00 | aleph, dare, nero, shane, snav |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,933.89)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.447 | $4,000.00      | $1,788.33       |
| 2024-10-20 |      0.073 | $2,000.00      | $145.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
