### Roster Details<br />
Team Name: Vorpal Swords<br />
Roster: Sh1rax, sqn, T0rby, Uroboros, Valter0k<br />
Global Rank: [393](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [249]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  592.1<br />
<br />
Final Rank Value (592.1) = Starting Rank Value (590.8) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.152[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 590.8
- 400 + ( ( 0.097 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 590.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5624 | 2024-09-26 | Legacy                   | L   | 0.162      | -            | -                | -                | -         |    -0.90 | Sh1rax, sqn, T0rby, Uroboros, Valter0k |
|            4 |     6087 | 2024-09-19 | Shadow Wizard Money Gang | L   | 0.116      | -            | -                | -                | -         |    -1.81 | Rulik, sqn, stanf1x, T0rby, Valter0k   |
|            3 |     6149 | 2024-09-18 | Who cares                | W   | 0.109      | 0.333        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.65 | Rulik, sqn, stanf1x, T0rby, Valter0k   |
|            2 |     6218 | 2024-09-17 | F5 Esports               | W   | 0.102      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.22 | Rulik, sqn, stanf1x, T0rby, Valter0k   |
|            1 |     6283 | 2024-09-16 | Risky Biscuits           | W   | 0.095      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.13 | Rulik, sqn, stanf1x, T0rby, Valter0k   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($193.13)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.129 | $1,500.00      | $193.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
