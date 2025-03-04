### Roster Details<br />
Team Name: Imp Pact<br />
Roster: gadfly, gone, raven, Serendipity, Stx<br />
Global Rank: [206](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [54]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  618.5<br />
<br />
Final Rank Value (618.5) = Starting Rank Value (611.0) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 611.0
- 400 + ( ( 0.111 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 611.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1872 | 2024-10-18 | Lotus        | W   | 0.308      | 0.347        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     4.44 | gadfly, gone, raven, Serendipity, Stx |
|            5 |     2260 | 2024-10-02 | TSM Impact   | W   | 0.201      | 0.347        | 0.001 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     3.14 | gadfly, gone, raven, Serendipity, Stx |
|            4 |     2522 | 2024-09-25 | Nouns.fe     | W   | 0.155      | 0.347        | 0.001 (0.000)    | 0.091 (0.005)    | 0 (0.000) |     2.39 | gadfly, gone, raven, Serendipity, Stx |
|            3 |     2730 | 2024-09-19 | FlyQuest RED | L   | 0.115      | -            | -                | -                | -         |    -1.68 | gadfly, gone, raven, Serendipity, Stx |
|            2 |     2933 | 2024-09-12 | FLUFFY MAFIA | L   | 0.068      | -            | -                | -                | -         |    -1.07 | gadfly, gone, raven, Serendipity, Stx |
|            1 |     3120 | 2024-09-05 | Aware Impact | W   | 0.021      | 0.347        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.32 | gadfly, gone, raven, Serendipity, Stx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($523.46)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.308 | $1,700.00      | $523.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
