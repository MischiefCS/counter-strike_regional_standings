### Roster Details<br />
Team Name: DXA Esports<br />
Roster: helix, HUGHMUNGUS, Kiyo, Llamas, lucas<br />
Global Rank: [241](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  559.5<br />
<br />
Final Rank Value (559.5) = Starting Rank Value (591.5) + Head To Head Adjustments (-32.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.229[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 591.5
- 400 + ( ( 0.099 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 591.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      220 | 2025-02-15 | KZG                              | L   | 1.000      | -            | -                | -                | -         |   -15.40 | helix, HUGHMUNGUS, Kiyo, Llamas, lucas |
|            7 |      255 | 2025-02-14 | SemperFi Esports                 | L   | 1.000      | -            | -                | -                | -         |   -16.85 | helix, HUGHMUNGUS, Kiyo, Llamas, lucas |
|            6 |     2057 | 2024-10-09 | Arcade Esports (Australian team) | W   | 0.244      | 0.333        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     3.72 | helix, Kiyo, lucas, prakM, Roflko      |
|            5 |     2061 | 2024-10-09 | Arcade Esports (Australian team) | L   | 0.244      | -            | -                | -                | -         |    -4.03 | helix, Kiyo, lucas, prakM, Roflko      |
|            4 |     2300 | 2024-10-02 | Only One Word                    | W   | 0.198      | 0.333        | 0.001 (0.000)    | 0.233 (0.015)    | 0 (0.000) |     3.36 | helix, Kiyo, lucas, prakM, Roflko      |
|            3 |     2302 | 2024-10-02 | Only One Word                    | L   | 0.197      | -            | -                | -                | -         |    -2.89 | helix, Kiyo, lucas, prakM, Roflko      |
|            2 |     2561 | 2024-09-25 | MANTRA                           | L   | 0.151      | -            | -                | -                | -         |    -2.33 | helix, Kiyo, lucas, prakM, Roflko      |
|            1 |     2567 | 2024-09-25 | MANTRA                           | W   | 0.151      | 0.333        | 0.000 (0.000)    | 0.129 (0.006)    | 0 (0.000) |     2.45 | helix, Kiyo, lucas, prakM, Roflko      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($142.38)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.316 | $450.00        | $142.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
