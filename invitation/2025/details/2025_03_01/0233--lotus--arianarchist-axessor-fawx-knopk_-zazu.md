### Roster Details<br />
Team Name: Lotus<br />
Roster: ARIANARCHIST, Axessor, Fawx, Knopk@, Zazu<br />
Global Rank: [233](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [71]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  583.4<br />
<br />
Final Rank Value (583.4) = Starting Rank Value (593.9) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.150[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.100<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 593.9
- 400 + ( ( 0.100 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 593.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1872 | 2024-10-18 | Imp Pact         | L   | 0.308      | -            | -                | -                | -         |    -4.44 | ARIANARCHIST, Axessor, Fawx, Knopk@, Zazu |
|            5 |     2234 | 2024-10-03 | Nouns.fe         | L   | 0.208      | -            | -                | -                | -         |    -3.16 | ARIANARCHIST, Axessor, Fawx, Knopk@, Zazu |
|            4 |     2469 | 2024-09-26 | FlyQuest RED     | L   | 0.161      | -            | -                | -                | -         |    -2.20 | ARIANARCHIST, Axessor, Fawx, Knopk@, Zazu |
|            3 |     2766 | 2024-09-18 | FLUFFY MAFIA     | L   | 0.108      | -            | -                | -                | -         |    -1.60 | ARIANARCHIST, Axessor, Fawx, Knopk@, Zazu |
|            2 |     2934 | 2024-09-12 | Aware Impact     | W   | 0.068      | 0.333        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.08 | ARIANARCHIST, Axessor, Fawx, Knopk@, Zazu |
|            1 |     3163 | 2024-09-04 | Blue Otter Karma | L   | 0.015      | -            | -                | -                | -         |    -0.23 | ARIANARCHIST, Axessor, Fawx, Knopk@, Zazu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($354.10)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.308 | $1,150.00      | $354.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
