### Roster Details<br />
Team Name: KorvuX<br />
Roster: Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN<br />
Global Rank: [417](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [264]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  617.5<br />
<br />
Final Rank Value (617.5) = Starting Rank Value (610.0) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.0
- 400 + ( ( 0.105 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 610.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1978 | 2024-12-06 | ZOTIX          | L   | 0.640      | -            | -                | -                | -         |    -8.93 | Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN |
|            6 |     2040 | 2024-12-04 | C4PYBARAS      | W   | 0.627      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.31 | Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN |
|            5 |     2162 | 2024-12-02 | CBUMP TEAM     | W   | 0.613      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.36 | Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN |
|            4 |     3432 | 2024-11-10 | Infernal Void  | L   | 0.466      | -            | -                | -                | -         |    -7.21 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |
|            3 |     3449 | 2024-11-10 | Wklemmt        | W   | 0.465      | 1.000        | 0.000 (0.000)    | 0.023 (0.011)    | 0 (0.000) |     6.61 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |
|            2 |     3485 | 2024-11-09 | Esport Factory | W   | 0.460      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.95 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |
|            1 |     3507 | 2024-11-09 | TGM-Gonsenheim | W   | 0.458      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.38 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($319.98)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.700 | $350.00        | $244.99         |
| 2024-11-10 |      0.466 | $160.84        | $74.99          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
