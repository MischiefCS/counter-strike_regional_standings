### Roster Details<br />
Team Name: Chicken Coop Esports<br />
Roster: BAGEL, BiNoX, FRIZZY, LittleBEER, taggy<br />
Global Rank: [102](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  532.1<br />
<br />
Final Rank Value (532.1) = Starting Rank Value (545.2) + Head To Head Adjustments (-13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 545.2
- 400 + ( ( 0.063 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 545.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      357 | 2025-02-10 | MIGHT              | L   | 0.452      | -            | -                | -                | -         |    -7.82 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            5 |      395 | 2025-02-09 | Party Astronauts   | L   | 0.446      | -            | -                | -                | -         |    -7.59 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            4 |      436 | 2025-02-08 | LAG Gaming         | W   | 0.439      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.23 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            3 |      907 | 2024-12-12 | Bad News Capybaras | L   | 0.054      | -            | -                | -                | -         |    -0.98 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            2 |      934 | 2024-12-10 | Bad News Capybaras | L   | 0.041      | -            | -                | -                | -         |    -0.74 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            1 |      975 | 2024-12-07 | Alter Iron Club    | L   | 0.021      | -            | -                | -                | -         |    -0.25 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($90.29)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.027 | $3,300.00      | $90.29          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
